document.addEventListener('DOMContentLoaded', function() {
    // Default admin credentials
    const defaultUsername = "dev12";
    const defaultPassword = "12345";
    
    // Local storage keys
    const STORAGE_KEY = "adminPortalData";
    const USER_KEY = "currentUser";
    const TOKEN_KEY = "authToken";
    
    // Initialize data structure
    let appData = {
        users: [
            {
                username: defaultUsername,
                password: defaultPassword,
                lastLogin: null
            }
        ],
        customers: [],
        machines: []
    };
    
    // Load data from local storage if available
    function loadData() {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            appData = JSON.parse(savedData);
        }
    }
    
    // Save data to local storage
    function saveData() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    }
    
    // Generate a simple auth token
    function generateAuthToken() {
        return 'token-' + Math.random().toString(36).substr(2, 16);
    }
    
    // Check if user is authenticated
    function isAuthenticated() {
        return sessionStorage.getItem(TOKEN_KEY) !== null && 
               sessionStorage.getItem(USER_KEY) !== null;
    }
    
    // Get current user from session
    function getCurrentUser() {
        return sessionStorage.getItem(USER_KEY);
    }
    
    // Set current user in session
    function setCurrentUser(username) {
        const token = generateAuthToken();
        sessionStorage.setItem(USER_KEY, username);
        sessionStorage.setItem(TOKEN_KEY, token);
        return token;
    }
    
    // Clear current user from session
    function logout() {
        sessionStorage.removeItem(USER_KEY);
        sessionStorage.removeItem(TOKEN_KEY);
    }
    
    // DOM Elements
    const loginScreen = document.getElementById('login-screen');
    const adminPortal = document.getElementById('admin-portal');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const logoutBtn = document.getElementById('logout-btn');
    const currentUsername = document.getElementById('current-username');
    const welcomeUsername = document.getElementById('welcome-username');
    const lastLogin = document.getElementById('last-login');
    const customerCount = document.getElementById('customer-count');
    const machineCount = document.getElementById('machine-count');
    const navItems = document.querySelectorAll('.sidebar-nav li');
    const contentSections = document.querySelectorAll('.content-section');
    const currentSection = document.getElementById('current-section');
    
    // Customer elements
    const customerTableBody = document.getElementById('customer-table-body');
    const addCustomerBtn = document.getElementById('add-customer-btn');
    const customerModal = document.getElementById('customer-modal');
    const customerForm = document.getElementById('customer-form');
    const customerModalTitle = document.getElementById('customer-modal-title');
    
    // Machine elements
    const machineTableBody = document.getElementById('machine-table-body');
    const addMachineBtn = document.getElementById('add-machine-btn');
    const machineModal = document.getElementById('machine-modal');
    const machineForm = document.getElementById('machine-form');
    const machineModalTitle = document.getElementById('machine-modal-title');
    const machineCustomerSelect = document.getElementById('machine-customer');
    
    // Settings elements
    const changePasswordForm = document.getElementById('change-password-form');
    const passwordChangeMessage = document.getElementById('password-change-message');
    
    // Modal close buttons
    const closeButtons = document.querySelectorAll('.close-btn');
    
    // Check authentication on page load
    function checkAuth() {
        if (!isAuthenticated()) {
            loginScreen.style.display = "flex";
            adminPortal.style.display = "none";
        } else {
            loginScreen.style.display = "none";
            adminPortal.style.display = "flex";
            const username = getCurrentUser();
            currentUsername.textContent = username;
            welcomeUsername.textContent = username;
            
            // Find user and update last login display
            const user = appData.users.find(u => u.username === username);
            if (user) {
                lastLogin.textContent = formatDate(user.lastLogin);
            }
            
            loadDashboard();
            loadCustomers();
            loadMachines();
        }
    }
    
    // Helper functions
    function formatDate(dateString) {
        if (!dateString) return "Never";
        const date = new Date(dateString);
        return date.toLocaleString();
    }
    
    function generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    // Login functionality
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Find user
        const user = appData.users.find(u => u.username === username);
        
        if (user && user.password === password) {
            // Successful login
            loginError.textContent = "";
            
            // Update last login
            user.lastLogin = new Date().toISOString();
            saveData();
            
            // Set current user
            setCurrentUser(username);
            
            // Check auth and load appropriate view
            checkAuth();
        } else {
            // Failed login
            loginError.textContent = "Invalid username or password";
        }
    });
    
    // Logout functionality
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        logout();
        checkAuth();
        loginForm.reset();
    });
    
    // Navigation - protected by auth check
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (!isAuthenticated()) {
                checkAuth();
                return;
            }
            
            const section = this.getAttribute('data-section');
            
            // Update active nav item
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Update current section title
            currentSection.textContent = this.textContent.trim();
            
            // Show the correct section
            contentSections.forEach(sec => sec.classList.remove('active'));
            document.getElementById(`${section}-section`).classList.add('active');
        });
    });
    
    // Dashboard functions
    function loadDashboard() {
        if (!isAuthenticated()) {
            checkAuth();
            return;
        }
        
        customerCount.textContent = appData.customers.length;
        machineCount.textContent = appData.machines.length;
    }
    
    // Customer functions
    function loadCustomers() {
        if (!isAuthenticated()) {
            checkAuth();
            return;
        }
        
        customerTableBody.innerHTML = "";
        
        appData.customers.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.id.substring(0, 8)}</td>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>${customer.address.substring(0, 30)}${customer.address.length > 30 ? '...' : ''}</td>
                <td>${new Date(customer.registrationDate).toLocaleDateString()}</td>
                <td>
                    <button class="btn btn-sm btn-outline edit-customer" data-id="${customer.id}">Edit</button>
                    <button class="btn btn-sm btn-outline delete-customer" data-id="${customer.id}">Delete</button>
                </td>
            `;
            customerTableBody.appendChild(row);
        });
        
        // Add event listeners to edit/delete buttons
        document.querySelectorAll('.edit-customer').forEach(btn => {
            btn.addEventListener('click', function() {
                if (!isAuthenticated()) {
                    checkAuth();
                    return;
                }
                const customerId = this.getAttribute('data-id');
                editCustomer(customerId);
            });
        });
        
        document.querySelectorAll('.delete-customer').forEach(btn => {
            btn.addEventListener('click', function() {
                if (!isAuthenticated()) {
                    checkAuth();
                    return;
                }
                const customerId = this.getAttribute('data-id');
                deleteCustomer(customerId);
            });
        });
    }
    
    function addCustomer() {
        if (!isAuthenticated()) {
            checkAuth();
            return;
        }
        
        customerModalTitle.textContent = "Add Customer";
        customerForm.reset();
        document.getElementById('customer-id').value = "";
        customerModal.style.display = "block";
    }
    
    function editCustomer(customerId) {
        if (!isAuthenticated()) {
            checkAuth();
            return;
        }
        
        const customer = appData.customers.find(c => c.id === customerId);
        if (customer) {
            customerModalTitle.textContent = "Edit Customer";
            document.getElementById('customer-id').value = customer.id;
            document.getElementById('customer-name').value = customer.name;
            document.getElementById('customer-email').value = customer.email;
            document.getElementById('customer-phone').value = customer.phone;
            document.getElementById('customer-address').value = customer.address;
            customerModal.style.display = "block";
        }
    }
    
    function deleteCustomer(customerId) {
        if (!isAuthenticated()) {
            checkAuth();
            return;
        }
        
        if (confirm("Are you sure you want to delete this customer?")) {
            appData.customers = appData.customers.filter(c => c.id !== customerId);
            saveData();
            loadCustomers();
            loadDashboard();
        }
    }
    
    customerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!isAuthenticated()) {
            checkAuth();
            return;
        }
        
        const customerId = document.getElementById('customer-id').value;
        const name = document.getElementById('customer-name').value;
        const email = document.getElementById('customer-email').value;
        const phone = document.getElementById('customer-phone').value;
        const address = document.getElementById('customer-address').value;
        
        if (customerId) {
            // Update existing customer
            const customer = appData.customers.find(c => c.id === customerId);
            if (customer) {
                customer.name = name;
                customer.email = email;
                customer.phone = phone;
                customer.address = address;
            }
        } else {
            // Add new customer
            const newCustomer = {
                id: generateId(),
                name,
                email,
                phone,
                address,
                registrationDate: new Date().toISOString()
            };
            appData.customers.push(newCustomer);
        }
        
        saveData();
        loadCustomers();
        loadDashboard();
        customerModal.style.display = "none";
    });
    
    // Machine functions
    function loadMachines() {
        if (!isAuthenticated()) {
            checkAuth();
            return;
        }
        
        machineTableBody.innerHTML = "";
        
        // Update customer select in machine modal
        machineCustomerSelect.innerHTML = '<option value="">Select Customer</option>';
        appData.customers.forEach(customer => {
            const option = document.createElement('option');
            option.value = customer.id;
            option.textContent = customer.name;
            machineCustomerSelect.appendChild(option);
        });
        
        appData.machines.forEach(machine => {
            const customer = appData.customers.find(c => c.id === machine.customerId);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${machine.id.substring(0, 8)}</td>
                <td>${machine.model}</td>
                <td>${machine.serialNumber}</td>
                <td>${machine.manufacturer}</td>
                <td>${new Date(machine.installationDate).toLocaleDateString()}</td>
                <td>${customer ? customer.name : 'Unknown'}</td>
                <td><span class="badge ${getStatusClass(machine.status)}">${machine.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-outline edit-machine" data-id="${machine.id}">Edit</button>
                    <button class="btn btn-sm btn-outline delete-machine" data-id="${machine.id}">Delete</button>
                </td>
            `;
            machineTableBody.appendChild(row);
        });
        
        // Add event listeners to edit/delete buttons
        document.querySelectorAll('.edit-machine').forEach(btn => {
            btn.addEventListener('click', function() {
                if (!isAuthenticated()) {
                    checkAuth();
                    return;
                }
                const machineId = this.getAttribute('data-id');
                editMachine(machineId);
            });
        });
        
        document.querySelectorAll('.delete-machine').forEach(btn => {
            btn.addEventListener('click', function() {
                if (!isAuthenticated()) {
                    checkAuth();
                    return;
                }
                const machineId = this.getAttribute('data-id');
                deleteMachine(machineId);
            });
        });
    }
    
    function getStatusClass(status) {
        switch (status) {
            case 'Active': return 'badge-success';
            case 'Inactive': return 'badge-danger';
            case 'Maintenance': return 'badge-warning';
            default: return 'badge-info';
        }
    }
    
    function addMachine() {
        if (!isAuthenticated()) {
            checkAuth();
            return;
        }
        
        machineModalTitle.textContent = "Add Machine";
        machineForm.reset();
        document.getElementById('machine-id').value = "";
        machineModal.style.display = "block";
    }
    
    function editMachine(machineId) {
        if (!isAuthenticated()) {
            checkAuth();
            return;
        }
        
        const machine = appData.machines.find(m => m.id === machineId);
        if (machine) {
            machineModalTitle.textContent = "Edit Machine";
            document.getElementById('machine-id').value = machine.id;
            document.getElementById('machine-model').value = machine.model;
            document.getElementById('machine-serial').value = machine.serialNumber;
            document.getElementById('machine-manufacturer').value = machine.manufacturer;
            document.getElementById('machine-installation').value = machine.installationDate.split('T')[0];
            document.getElementById('machine-customer').value = machine.customerId;
            document.getElementById('machine-status').value = machine.status;
            machineModal.style.display = "block";
        }
    }
    
    function deleteMachine(machineId) {
        if (!isAuthenticated()) {
            checkAuth();
            return;
        }
        
        if (confirm("Are you sure you want to delete this machine?")) {
            appData.machines = appData.machines.filter(m => m.id !== machineId);
            saveData();
            loadMachines();
            loadDashboard();
        }
    }
    
    machineForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!isAuthenticated()) {
            checkAuth();
            return;
        }
        
        const machineId = document.getElementById('machine-id').value;
        const model = document.getElementById('machine-model').value;
        const serialNumber = document.getElementById('machine-serial').value;
        const manufacturer = document.getElementById('machine-manufacturer').value;
        const installationDate = document.getElementById('machine-installation').value;
        const customerId = document.getElementById('machine-customer').value;
        const status = document.getElementById('machine-status').value;
        
        if (machineId) {
            // Update existing machine
            const machine = appData.machines.find(m => m.id === machineId);
            if (machine) {
                machine.model = model;
                machine.serialNumber = serialNumber;
                machine.manufacturer = manufacturer;
                machine.installationDate = installationDate;
                machine.customerId = customerId;
                machine.status = status;
            }
        } else {
            // Add new machine
            const newMachine = {
                id: generateId(),
                model,
                serialNumber,
                manufacturer,
                installationDate,
                customerId,
                status
            };
            appData.machines.push(newMachine);
        }
        
        saveData();
        loadMachines();
        loadDashboard();
        machineModal.style.display = "none";
    });
    
    // Change password functionality
    changePasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!isAuthenticated()) {
            checkAuth();
            return;
        }
        
        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        const username = getCurrentUser();
        const user = appData.users.find(u => u.username === username);
        
        if (!user || user.password !== currentPassword) {
            showPasswordMessage("Current password is incorrect", "error");
            return;
        }
        
        if (newPassword !== confirmPassword) {
            showPasswordMessage("New passwords don't match", "error");
            return;
        }
        
        if (newPassword.length < 6) {
            showPasswordMessage("Password must be at least 6 characters", "error");
            return;
        }
        
        user.password = newPassword;
        saveData();
        showPasswordMessage("Password changed successfully", "success");
        changePasswordForm.reset();
    });
    
    function showPasswordMessage(message, type) {
        passwordChangeMessage.textContent = message;
        passwordChangeMessage.className = "message " + type;
        setTimeout(() => {
            passwordChangeMessage.textContent = "";
            passwordChangeMessage.className = "message";
        }, 3000);
    }
    
    // Modal close buttons
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            customerModal.style.display = "none";
            machineModal.style.display = "none";
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === customerModal) {
            customerModal.style.display = "none";
        }
        if (e.target === machineModal) {
            machineModal.style.display = "none";
        }
    });
    
    // Event listeners for buttons
    addCustomerBtn.addEventListener('click', addCustomer);
    addMachineBtn.addEventListener('click', addMachine);
    
    // Initialize the app
    loadData();
    checkAuth();
});
