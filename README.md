<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EBIXCONSOL PORTAL - Admin</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f0f0;
            color: #333;
        }
        
        /* Square Login Container */
        .login-container {
            width: 350px;
            height: 350px;
            margin: 80px auto;
            background: #fff;
            padding: 30px;
            border-radius: 0;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .login-container h2 {
            color: #2c3e50;
            margin-bottom: 25px;
            font-size: 24px;
        }
        
        .login-container input[type="text"],
        .login-container input[type="password"] {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 0;
            font-size: 16px;
        }
        
        .login-container input[type="submit"] {
            width: 100%;
            padding: 12px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 0;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .login-container input[type="submit"]:hover {
            background-color: #2980b9;
        }
        
        .copyright {
            margin-top: 20px;
            font-size: 12px;
            color: #7f8c8d;
        }
        
        /* Admin Portal */
        .admin-portal {
            display: none;
            background-color: #2c3e50;
            color: #ecf0f1;
            min-height: 100vh;
        }
        
        .header {
            background-color: #1a252f;
            padding: 15px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .logo {
            font-size: 22px;
            font-weight: bold;
            color: #3498db;
        }
        
        .portal-title {
            font-size: 18px;
            color: #ecf0f1;
        }
        
        .clock {
            font-size: 16px;
            font-weight: bold;
            color: #f39c12;
        }
        
        .user-actions {
            display: flex;
            gap: 15px;
        }
        
        .user-actions button {
            padding: 8px 15px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.3s;
        }
        
        .user-actions button:hover {
            background-color: #2980b9;
        }
        
        .content {
            padding: 25px;
            background-color: #34495e;
            min-height: calc(100vh - 60px);
        }
        
        .section {
            background-color: #3d566e;
            padding: 20px;
            margin-bottom: 25px;
            border-radius: 6px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .section h2 {
            margin-top: 0;
            border-bottom: 1px solid #4b6584;
            padding-bottom: 10px;
            color: #f39c12;
            font-size: 20px;
        }
        
        .form-group {
            margin-bottom: 18px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #bdc3c7;
        }
        
        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group input[type="tel"],
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #4b6584;
            border-radius: 4px;
            background-color: #4b6584;
            color: #ecf0f1;
            font-size: 15px;
        }
        
        .form-group textarea {
            min-height: 80px;
        }
        
        .form-row {
            display: flex;
            gap: 20px;
        }
        
        .form-row .form-group {
            flex: 1;
        }
        
        .status-cards {
            display: flex;
            gap: 20px;
            margin-top: 25px;
            flex-wrap: wrap;
        }
        
        .status-card {
            flex: 1;
            min-width: 200px;
            background-color: #4b6584;
            padding: 15px;
            border-radius: 6px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: transform 0.3s;
        }
        
        .status-card:hover {
            transform: translateY(-5px);
        }
        
        .status-card h3 {
            margin-top: 0;
            color: #bdc3c7;
            font-size: 16px;
        }
        
        .status-card .count {
            font-size: 28px;
            font-weight: bold;
            color: #f39c12;
        }
        
        .action-buttons {
            display: flex;
            gap: 15px;
            margin-top: 25px;
        }
        
        .action-buttons button {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 15px;
            transition: all 0.3s;
        }
        
        .save-btn {
            background-color: #2ecc71;
            color: white;
        }
        
        .save-btn:hover {
            background-color: #27ae60;
        }
        
        .print-btn {
            background-color: #3498db;
            color: white;
        }
        
        .print-btn:hover {
            background-color: #2980b9;
        }
        
        .remove-btn {
            background-color: #e74c3c;
            color: white;
        }
        
        .remove-btn:hover {
            background-color: #c0392b;
        }
        
        .view-btn {
            background-color: #9b59b6;
            color: white;
        }
        
        .view-btn:hover {
            background-color: #8e44ad;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 25px;
            background-color: #4b6584;
        }
        
        table th, table td {
            padding: 12px 15px;
            border: 1px solid #5d7a9a;
            text-align: left;
        }
        
        table th {
            background-color: #3d566e;
            color: #f39c12;
            font-weight: 600;
            position: sticky;
            top: 60px;
        }
        
        table tr:nth-child(even) {
            background-color: #455d73;
        }
        
        table tr:hover {
            background-color: #506e8c;
        }
        
        /* Filter Section */
        .filter-section {
            background-color: #4b6584;
            padding: 15px;
            border-radius: 6px;
            margin-bottom: 20px;
        }
        
        .filter-row {
            display: flex;
            gap: 15px;
            align-items: center;
        }
        
        .filter-row select {
            padding: 8px 12px;
            border-radius: 4px;
            background-color: #3d566e;
            color: #ecf0f1;
            border: 1px solid #5d7a9a;
        }
        
        .filter-row button {
            padding: 8px 15px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .filter-row button:hover {
            background-color: #2980b9;
        }
        
        /* Change Password Modal */
        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1000;
        }
        
        .change-password {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #3d566e;
            padding: 25px;
            border-radius: 0;
            z-index: 1001;
            width: 350px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .change-password h3 {
            margin-top: 0;
            color: #f39c12;
            font-size: 20px;
            border-bottom: 1px solid #4b6584;
            padding-bottom: 10px;
        }
        
        .change-password input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            background-color: #4b6584;
            border: 1px solid #5d7a9a;
            color: #ecf0f1;
            border-radius: 0;
            font-size: 15px;
        }
        
        .change-password-buttons {
            display: flex;
            gap: 15px;
            justify-content: flex-end;
        }
        
        .change-password-buttons button {
            padding: 8px 20px;
            border: none;
            border-radius: 0;
            cursor: pointer;
            font-size: 15px;
            transition: all 0.3s;
        }
        
        .change-password-buttons button:first-child {
            background-color: #95a5a6;
            color: white;
        }
        
        .change-password-buttons button:first-child:hover {
            background-color: #7f8c8d;
        }
        
        .change-password-buttons button:last-child {
            background-color: #2ecc71;
            color: white;
        }
        
        .change-password-buttons button:last-child:hover {
            background-color: #27ae60;
        }
        
        /* Update Username Modal */
        .change-username {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #3d566e;
            padding: 25px;
            border-radius: 0;
            z-index: 1001;
            width: 350px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .change-username h3 {
            margin-top: 0;
            color: #f39c12;
            font-size: 20px;
            border-bottom: 1px solid #4b6584;
            padding-bottom: 10px;
        }
        
        .change-username input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            background-color: #4b6584;
            border: 1px solid #5d7a9a;
            color: #ecf0f1;
            border-radius: 0;
            font-size: 15px;
        }
        
        .change-username-buttons {
            display: flex;
            gap: 15px;
            justify-content: flex-end;
        }
        
        .change-username-buttons button {
            padding: 8px 20px;
            border: none;
            border-radius: 0;
            cursor: pointer;
            font-size: 15px;
            transition: all 0.3s;
        }
        
        .change-username-buttons button:first-child {
            background-color: #95a5a6;
            color: white;
        }
        
        .change-username-buttons button:first-child:hover {
            background-color: #7f8c8d;
        }
        
        .change-username-buttons button:last-child {
            background-color: #2ecc71;
            color: white;
        }
        
        .change-username-buttons button:last-child:hover {
            background-color: #27ae60;
        }
        
        /* View Record Modal */
        .view-record {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #3d566e;
            padding: 25px;
            border-radius: 0;
            z-index: 1001;
            width: 600px;
            max-width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .view-record h3 {
            margin-top: 0;
            color: #f39c12;
            font-size: 20px;
            border-bottom: 1px solid #4b6584;
            padding-bottom: 10px;
        }
        
        .view-record-content {
            margin-top: 15px;
        }
        
        .view-record-group {
            margin-bottom: 15px;
        }
        
        .view-record-group label {
            font-weight: bold;
            color: #bdc3c7;
            display: block;
            margin-bottom: 5px;
        }
        
        .view-record-group span {
            display: block;
            padding: 8px;
            background-color: #4b6584;
            border-radius: 4px;
        }
        
        .view-record-buttons {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
        }
        
        .view-record-buttons button {
            padding: 8px 20px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 0;
            cursor: pointer;
        }
        
        .view-record-buttons button:hover {
            background-color: #2980b9;
        }
        
        /* File Upload Styles */
        .file-upload-group {
            margin-bottom: 20px;
        }
        
        .file-upload-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #bdc3c7;
        }
        
        .file-upload-group input[type="file"] {
            width: 100%;
            padding: 8px;
            background-color: #4b6584;
            border: 1px dashed #5d7a9a;
            border-radius: 4px;
            color: #ecf0f1;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .form-row {
                flex-direction: column;
                gap: 0;
            }
            
            .status-cards {
                flex-direction: column;
                gap: 15px;
            }
            
            .status-card {
                min-width: 100%;
            }
            
            .login-container {
                width: 90%;
                height: auto;
                margin: 40px auto;
            }
            
            .change-password,
            .change-username,
            .view-record {
                width: 90%;
            }
            
            .filter-row {
                flex-direction: column;
                align-items: flex-start;
            }
        }
        
        /* Extended Dashboard */
        .dashboard-container {
            display: flex;
            flex-direction: column;
            min-height: calc(100vh - 110px);
        }
        
        .records-view {
            flex-grow: 1;
            overflow-y: auto;
            max-height: 60vh;
        }
        
        /* Pincode Section */
        .pincode-section {
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <!-- Square Login Section -->
    <div class="login-container" id="loginSection">
        <h2>Admin Login</h2>
        <form id="loginForm">
            <div class="form-group">
                <input type="text" id="username" name="username" placeholder="Username" required>
            </div>
            <div class="form-group">
                <input type="password" id="password" name="password" placeholder="Password" required>
            </div>
            <input type="submit" value="Login">
        </form>
        <div class="copyright">
            All Rights Reserved By Dev Makwana - EBIXCONSOL PORTAL
        </div>
    </div>
    
    <!-- Admin Portal -->
    <div class="admin-portal" id="adminPortal">
        <div class="header">
            <div class="logo">EBIXCONSOL</div>
            <div class="portal-title">Admin Portal</div>
            <div class="clock" id="liveClock"></div>
            <div class="user-actions">
                <button id="changeUsernameBtn">Update Username</button>
                <button id="changePasswordBtn">Change Password</button>
                <button id="logoutBtn">Logout</button>
            </div>
        </div>
        
        <div class="content">
            <div class="dashboard-container">
                <div class="section">
                    <h2>Customer Information</h2>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="customerNumber">Customer Number</label>
                            <input type="text" id="customerNumber" name="customerNumber" placeholder="Enter customer number">
                        </div>
                        <div class="form-group">
                            <label for="entryDate">Entry Date & Time</label>
                            <input type="text" id="entryDate" name="entryDate" readonly>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" placeholder="Enter first name">
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Enter last name">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="email">Email ID</label>
                            <input type="email" id="email" name="email" placeholder="Enter email address">
                        </div>
                        <div class="form-group">
                            <label for="contactNumber">Contact Number</label>
                            <input type="tel" id="contactNumber" name="contactNumber" placeholder="Enter contact number">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" id="address" name="address" placeholder="Enter full address">
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="city">City/Village</label>
                            <input type="text" id="city" name="city" placeholder="Enter city or village">
                        </div>
                        <div class="form-group">
                            <label for="state">State</label>
                            <input type="text" id="state" name="state" placeholder="Enter state">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="pincode">Pincode</label>
                            <input type="text" id="pincode" name="pincode" placeholder="Enter pincode">
                        </div>
                        <div class="form-group">
                            <label for="country">Country</label>
                            <input type="text" id="country" name="country" value="India" readonly>
                        </div>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="save-btn" id="saveCustomerBtn">Save Customer Information</button>
                    </div>
                </div>
                
                <div class="section">
                    <h2>Machine Information</h2>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="machineName">Machine Name</label>
                            <input type="text" id="machineName" name="machineName" placeholder="Enter machine name">
                        </div>
                        <div class="form-group">
                            <label for="serialNumber">Serial Number</label>
                            <input type="text" id="serialNumber" name="serialNumber" placeholder="Enter serial number">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="warrantyStatus">Warranty Status</label>
                            <select id="warrantyStatus">
                                <option value="in_warranty">In Warranty</option>
                                <option value="out_of_warranty">Out of Warranty</option>
                                <option value="amc">AMC (Annual Maintenance Contract)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="recordStatus">Record Status</label>
                            <select id="recordStatus">
                                <option value="accepted">Accepted</option>
                                <option value="hold">Hold</option>
                                <option value="running">Running</option>
                                <option value="public_holiday">Public Holiday</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="customerRemark">Customer Remark</label>
                        <textarea id="customerRemark" placeholder="Enter customer remarks"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="partsChangeRemark">Parts Change Remark</label>
                        <textarea id="partsChangeRemark" placeholder="Enter parts change remarks"></textarea>
                    </div>
                    
                    <div class="form-row">
                        <div class="file-upload-group">
                            <label for="imageUpload">Upload Image (Invoice/Other)</label>
                            <input type="file" id="imageUpload" name="imageUpload" accept="image/*">
                        </div>
                        <div class="file-upload-group">
                            <label for="zipUpload">Upload ZIP File</label>
                            <input type="file" id="zipUpload" name="zipUpload" accept=".zip,.rar">
                        </div>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="save-btn" id="saveMachineBtn">Save Machine Information</button>
                        <button class="remove-btn" id="removeRecordBtn">Remove Record</button>
                        <button class="view-btn" id="viewRecordBtn">View Record</button>
                    </div>
                </div>
                
                <div class="section records-view">
                    <h2>Records Summary</h2>
                    <div class="status-cards">
                        <div class="status-card" data-status="all">
                            <h3>Total Records</h3>
                            <div class="count" id="totalRecords">0</div>
                        </div>
                        <div class="status-card" data-status="accepted">
                            <h3>Accepted</h3>
                            <div class="count" id="acceptedRecords">0</div>
                        </div>
                        <div class="status-card" data-status="hold">
                            <h3>Hold</h3>
                            <div class="count" id="holdRecords">0</div>
                        </div>
                        <div class="status-card" data-status="running">
                            <h3>Running</h3>
                            <div class="count" id="runningRecords">0</div>
                        </div>
                        <div class="status-card" data-status="public_holiday">
                            <h3>Public Holiday</h3>
                            <div class="count" id="holidayRecords">0</div>
                        </div>
                    </div>
                    
                    <div class="filter-section">
                        <div class="filter-row">
                            <label for="filterStatus">Filter by Status:</label>
                            <select id="filterStatus">
                                <option value="all">All Records</option>
                                <option value="accepted">Accepted</option>
                                <option value="hold">Hold</option>
                                <option value="running">Running</option>
                                <option value="public_holiday">Public Holiday</option>
                            </select>
                            <button id="applyFilter">Apply Filter</button>
                            <button id="clearFilter">Clear Filter</button>
                        </div>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="print-btn" id="printRecordsBtn">Print All Records</button>
                    </div>
                    
                    <table id="recordsTable">
                        <thead>
                            <tr>
                                <th>Customer No</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Machine</th>
                                <th>Warranty</th>
                                <th>Status</th>
                                <th>Entry Date</th>
                                <th>Last Update</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Records will be added here dynamically -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Change Password Modal -->
    <div class="overlay" id="overlay"></div>
    <div class="change-password" id="changePasswordModal">
        <h3>Change Password</h3>
        <div class="form-group">
            <input type="password" id="currentPassword" placeholder="Current Password">
        </div>
        <div class="form-group">
            <input type="password" id="newPassword" placeholder="New Password">
        </div>
        <div class="form-group">
            <input type="password" id="confirmPassword" placeholder="Confirm New Password">
        </div>
        <div class="change-password-buttons">
            <button id="cancelChangePassword">Cancel</button>
            <button id="confirmChangePassword">Change Password</button>
        </div>
    </div>
    
    <!-- Change Username Modal -->
    <div class="change-username" id="changeUsernameModal">
        <h3>Update Username</h3>
        <div class="form-group">
            <input type="text" id="currentUsername" placeholder="Current Username" value="devmakwana12" readonly>
        </div>
        <div class="form-group">
            <input type="text" id="newUsername" placeholder="New Username">
        </div>
        <div class="form-group">
            <input type="password" id="confirmPasswordForUsername" placeholder="Confirm Password">
        </div>
        <div class="change-username-buttons">
            <button id="cancelChangeUsername">Cancel</button>
            <button id="confirmChangeUsername">Update Username</button>
        </div>
    </div>
    
    <!-- View Record Modal -->
    <div class="view-record" id="viewRecordModal">
        <h3>View Record Details</h3>
        <div class="view-record-content" id="viewRecordContent">
            <!-- Record details will be inserted here -->
        </div>
        <div class="view-record-buttons">
            <button id="closeViewRecord">Close</button>
        </div>
    </div>
    
    <script>
        // Current user credentials
        let currentUser = {
            username: 'devmakwana12',
            password: '12345'
        };
        
        // Login functionality
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username === currentUser.username && password === currentUser.password) {
                document.getElementById('loginSection').style.display = 'none';
                document.getElementById('adminPortal').style.display = 'block';
                
                // Set current date
                const now = new Date();
                document.getElementById('entryDate').value = formatDateTime(now);
                
                // Start clock
                updateClock();
                setInterval(updateClock, 1000);
            } else {
                alert('Invalid username or password');
            }
        });
        
        // Format date and time for display
        function formatDateTime(date) {
            const options = { 
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
            return date.toLocaleString('en-IN', options);
        }
        
        // Logout functionality
        document.getElementById('logoutBtn').addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                document.getElementById('adminPortal').style.display = 'none';
                document.getElementById('loginSection').style.display = 'block';
                document.getElementById('loginForm').reset();
                // Clear all fields
                clearAllFields();
            }
        });
        
        // Clear all form fields
        function clearAllFields() {
            document.getElementById('customerNumber').value = '';
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('email').value = '';
            document.getElementById('contactNumber').value = '';
            document.getElementById('address').value = '';
            document.getElementById('city').value = '';
            document.getElementById('state').value = '';
            document.getElementById('pincode').value = '';
            document.getElementById('machineName').value = '';
            document.getElementById('serialNumber').value = '';
            document.getElementById('customerRemark').value = '';
            document.getElementById('partsChangeRemark').value = '';
            document.getElementById('imageUpload').value = '';
            document.getElementById('zipUpload').value = '';
        }
        
        // Update clock
        function updateClock() {
            const now = new Date();
            const options = { 
                timeZone: 'Asia/Kolkata',
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            };
            document.getElementById('liveClock').textContent = 'India: ' + now.toLocaleString('en-IN', options);
        }
        
        // Records storage
        let records = [];
        let currentFilter = 'all';
        
        // Save customer
        document.getElementById('saveCustomerBtn').addEventListener('click', function() {
            const customerNumber = document.getElementById('customerNumber').value;
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const contactNumber = document.getElementById('contactNumber').value;
            const address = document.getElementById('address').value;
            const city = document.getElementById('city').value;
            const state = document.getElementById('state').value;
            const pincode = document.getElementById('pincode').value;
            const country = document.getElementById('country').value;
            const entryDate = document.getElementById('entryDate').value;
            
            if (!customerNumber || !firstName || !contactNumber) {
                alert('Please fill in required fields: Customer Number, First Name, and Contact Number');
                return;
            }
            
            // In a real app, you would save this to a database
            alert('Customer information saved successfully!');
        });
        
        // Save machine
        document.getElementById('saveMachineBtn').addEventListener('click', function() {
            const customerNumber = document.getElementById('customerNumber').value;
            const machineName = document.getElementById('machineName').value;
            const serialNumber = document.getElementById('serialNumber').value;
            const warrantyStatus = document.getElementById('warrantyStatus').value;
            const recordStatus = document.getElementById('recordStatus').value;
            const customerRemark = document.getElementById('customerRemark').value;
            const partsChangeRemark = document.getElementById('partsChangeRemark').value;
            
            if (!customerNumber || !machineName || !serialNumber) {
                alert('Please fill in required fields: Customer Number, Machine Name, and Serial Number');
                return;
            }
            
            // Check if this customer already has a record
            const existingIndex = records.findIndex(r => r.customerNumber === customerNumber);
            const now = new Date();
            
            if (existingIndex >= 0) {
                // Update existing record
                records[existingIndex] = {
                    ...records[existingIndex],
                    machineName,
                    serialNumber,
                    warrantyStatus,
                    recordStatus,
                    customerRemark,
                    partsChangeRemark,
                    pincode: document.getElementById('pincode').value,
                    statusChangeDate: formatDateTime(now)
                };
            } else {
                // Create a new record
                const record = {
                    customerNumber,
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    contactNumber: document.getElementById('contactNumber').value,
                    email: document.getElementById('email').value,
                    address: document.getElementById('address').value,
                    city: document.getElementById('city').value,
                    state: document.getElementById('state').value,
                    pincode: document.getElementById('pincode').value,
                    country: document.getElementById('country').value,
                    machineName,
                    serialNumber,
                    warrantyStatus,
                    recordStatus,
                    customerRemark,
                    partsChangeRemark,
                    entryDate: formatDateTime(now),
                    statusChangeDate: formatDateTime(now)
                };
                
                // Add to records array
                records.push(record);
            }
            
            // Update UI
            updateRecordsTable();
            updateStatusCounts();
            
            alert('Machine information saved successfully! Records updated below.');
            
            // Scroll to records section
            document.querySelector('.records-view').scrollIntoView({ behavior: 'smooth' });
        });
        
        // Update records table with optional filter
        function updateRecordsTable(filterStatus = 'all') {
            const tbody = document.querySelector('#recordsTable tbody');
            tbody.innerHTML = '';
            
            let filteredRecords = records;
            if (filterStatus !== 'all') {
                filteredRecords = records.filter(r => r.recordStatus === filterStatus);
            }
            
            if (filteredRecords.length === 0) {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td colspan="9" style="text-align:center;">No records found</td>`;
                tbody.appendChild(tr);
                return;
            }
            
            filteredRecords.forEach(record => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${record.customerNumber}</td>
                    <td>${record.firstName} ${record.lastName}</td>
                    <td>${record.contactNumber}</td>
                    <td>${record.machineName}</td>
                    <td>${formatWarrantyStatus(record.warrantyStatus)}</td>
                    <td>${formatStatus(record.recordStatus)}</td>
                    <td>${record.entryDate}</td>
                    <td>${record.statusChangeDate}</td>
                    <td><button class="view-btn" onclick="viewRecord('${record.customerNumber}')">View</button></td>
                `;
                tbody.appendChild(tr);
            });
        }
        
        // View record details
        function viewRecord(customerNumber) {
            const record = records.find(r => r.customerNumber === customerNumber);
            if (!record) return;
            
            const content = document.getElementById('viewRecordContent');
            content.innerHTML = `
                <div class="view-record-group">
                    <label>Customer Number:</label>
                    <span>${record.customerNumber}</span>
                </div>
                <div class="view-record-group">
                    <label>Name:</label>
                    <span>${record.firstName} ${record.lastName}</span>
                </div>
                <div class="view-record-group">
                    <label>Email:</label>
                    <span>${record.email || 'N/A'}</span>
                </div>
                <div class="view-record-group">
                    <label>Contact Number:</label>
                    <span>${record.contactNumber}</span>
                </div>
                <div class="view-record-group">
                    <label>Address:</label>
                    <span>${record.address || 'N/A'}</span>
                </div>
                <div class="view-record-group">
                    <label>City/Village:</label>
                    <span>${record.city || 'N/A'}</span>
                </div>
                <div class="view-record-group">
                    <label>State:</label>
                    <span>${record.state || 'N/A'}</span>
                </div>
                <div class="view-record-group">
                    <label>Pincode:</label>
                    <span>${record.pincode || 'N/A'}</span>
                </div>
                <div class="view-record-group">
                    <label>Country:</label>
                    <span>${record.country || 'N/A'}</span>
                </div>
                <div class="view-record-group">
                    <label>Machine Name:</label>
                    <span>${record.machineName || 'N/A'}</span>
                </div>
                <div class="view-record-group">
                    <label>Serial Number:</label>
                    <span>${record.serialNumber || 'N/A'}</span>
                </div>
                <div class="view-record-group">
                    <label>Warranty Status:</label>
                    <span>${formatWarrantyStatus(record.warrantyStatus)}</span>
                </div>
                <div class="view-record-group">
                    <label>Record Status:</label>
                    <span>${formatStatus(record.recordStatus)}</span>
                </div>
                <div class="view-record-group">
                    <label>Customer Remark:</label>
                    <span>${record.customerRemark || 'N/A'}</span>
                </div>
                <div class="view-record-group">
                    <label>Parts Change Remark:</label>
                    <span>${record.partsChangeRemark || 'N/A'}</span>
                </div>
                <div class="view-record-group">
                    <label>Entry Date:</label>
                    <span>${record.entryDate}</span>
                </div>
                <div class="view-record-group">
                    <label>Last Update:</label>
                    <span>${record.statusChangeDate}</span>
                </div>
            `;
            
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('viewRecordModal').style.display = 'block';
        }
        
        // Close view record modal
        document.getElementById('closeViewRecord').addEventListener('click', function() {
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('viewRecordModal').style.display = 'none';
        });
        
        // View current record
        document.getElementById('viewRecordBtn').addEventListener('click', function() {
            const customerNumber = document.getElementById('customerNumber').value;
            if (!customerNumber) {
                alert('Please enter a Customer Number to view');
                return;
            }
            
            viewRecord(customerNumber);
        });
        
        // Format warranty status for display
        function formatWarrantyStatus(status) {
            const statusMap = {
                'in_warranty': 'In Warranty',
                'out_of_warranty': 'Out of Warranty',
                'amc': 'AMC'
            };
            return statusMap[status] || status;
        }
        
        // Format status for display
        function formatStatus(status) {
            const statusMap = {
                'accepted': 'Accepted',
                'hold': 'Hold',
                'running': 'Running',
                'public_holiday': 'Public Holiday'
            };
            return statusMap[status] || status;
        }
        
        // Update status counts
        function updateStatusCounts() {
            document.getElementById('totalRecords').textContent = records.length;
            document.getElementById('acceptedRecords').textContent = 
                records.filter(r => r.recordStatus === 'accepted').length;
            document.getElementById('holdRecords').textContent = 
                records.filter(r => r.recordStatus === 'hold').length;
            document.getElementById('runningRecords').textContent = 
                records.filter(r => r.recordStatus === 'running').length;
            document.getElementById('holidayRecords').textContent = 
                records.filter(r => r.recordStatus === 'public_holiday').length;
        }
        
        // Remove record
        document.getElementById('removeRecordBtn').addEventListener('click', function() {
            const customerNumber = document.getElementById('customerNumber').value;
            if (!customerNumber) {
                alert('Please enter a Customer Number to remove');
                return;
            }
            
            if (confirm('Are you sure you want to remove this record?')) {
                records = records.filter(r => r.customerNumber !== customerNumber);
                updateRecordsTable(currentFilter);
                updateStatusCounts();
                alert('Record removed successfully!');
                
                // Clear form
                document.getElementById('customerNumber').value = '';
                document.getElementById('machineName').value = '';
                document.getElementById('serialNumber').value = '';
                document.getElementById('customerRemark').value = '';
                document.getElementById('partsChangeRemark').value = '';
            }
        });
        
        // Print records
        document.getElementById('printRecordsBtn').addEventListener('click', function() {
            window.print();
        });
        
        // Filter records by status
        document.getElementById('applyFilter').addEventListener('click', function() {
            currentFilter = document.getElementById('filterStatus').value;
            updateRecordsTable(currentFilter);
        });
        
        // Clear filter
        document.getElementById('clearFilter').addEventListener('click', function() {
            document.getElementById('filterStatus').value = 'all';
            currentFilter = 'all';
            updateRecordsTable('all');
        });
        
        // Filter by clicking on status cards
        document.querySelectorAll('.status-card').forEach(card => {
            card.addEventListener('click', function() {
                const status = this.getAttribute('data-status');
                document.getElementById('filterStatus').value = status;
                currentFilter = status;
                updateRecordsTable(status);
            });
        });
        
        // Change password modal
        document.getElementById('changePasswordBtn').addEventListener('click', function() {
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('changePasswordModal').style.display = 'block';
        });
        
        document.getElementById('cancelChangePassword').addEventListener('click', function() {
            closePasswordModal();
        });
        
        document.getElementById('overlay').addEventListener('click', function() {
            closePasswordModal();
            closeUsernameModal();
            closeViewRecordModal();
        });
        
        function closePasswordModal() {
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('changePasswordModal').style.display = 'none';
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
        }
        
        function closeViewRecordModal() {
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('viewRecordModal').style.display = 'none';
        }
        
        document.getElementById('confirmChangePassword').addEventListener('click', function() {
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (currentPassword !== currentUser.password) {
                alert('Current password is incorrect');
                return;
            }
            
            if (newPassword !== confirmPassword) {
                alert('New passwords do not match');
                return;
            }
            
            if (newPassword.length < 5) {
                alert('Password must be at least 5 characters long');
                return;
            }
            
            // Update password
            currentUser.password = newPassword;
            alert('Password changed successfully!');
            closePasswordModal();
        });
        
        // Change username modal
        document.getElementById('changeUsernameBtn').addEventListener('click', function() {
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('changeUsernameModal').style.display = 'block';
        });
        
        document.getElementById('cancelChangeUsername').addEventListener('click', function() {
            closeUsernameModal();
        });
        
        function closeUsernameModal() {
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('changeUsernameModal').style.display = 'none';
            document.getElementById('newUsername').value = '';
            document.getElementById('confirmPasswordForUsername').value = '';
        }
        
        document.getElementById('confirmChangeUsername').addEventListener('click', function() {
            const newUsername = document.getElementById('newUsername').value;
            const confirmPassword = document.getElementById('confirmPasswordForUsername').value;
            
            if (!newUsername) {
                alert('Please enter a new username');
                return;
            }
            
            if (confirmPassword !== currentUser.password) {
                alert('Password is incorrect');
                return;
            }
            
            // Update username
            currentUser.username = newUsername;
            document.getElementById('currentUsername').value = newUsername;
            alert('Username updated successfully!');
            closeUsernameModal();
        });
        
        // Auto-fill demo data for testing (can be removed in production)
        function fillDemoData() {
            document.getElementById('username').value = currentUser.username;
            document.getElementById('password').value = currentUser.password;
        }
        
        // Call this function to auto-fill login for testing
        fillDemoData();
    </script>
</body>
</html>
