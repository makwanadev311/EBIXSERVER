<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Portal</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Login Screen -->
    <div id="login-screen" class="login-container">
        <div class="login-box">
            <div class="login-header">
                <h2><i class="fas fa-shield-alt"></i> Admin Portal Login</h2>
            </div>
            <form id="login-form" class="login-form">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit" class="login-btn">Login</button>
                <div id="login-error" class="error-message"></div>
            </form>
        </div>
    </div>

    <!-- Admin Portal (hidden until login) -->
    <div id="admin-portal" class="admin-container" style="display: none;">
        <!-- Sidebar Navigation -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <h2><i class="fas fa-shield-alt"></i> Admin Portal</h2>
            </div>
            <nav class="sidebar-nav">
                <ul>
                    <li class="active" data-section="dashboard"><a href="#"><i class="fas fa-tachometer-alt"></i> Dashboard</a></li>
                    <li data-section="customer-info"><a href="#"><i class="fas fa-users"></i> Customer Info</a></li>
                    <li data-section="machine-info"><a href="#"><i class="fas fa-cogs"></i> Machine Info</a></li>
                    <li data-section="settings"><a href="#"><i class="fas fa-cog"></i> Settings</a></li>
                </ul>
            </nav>
            <div class="sidebar-footer">
                <a href="#" id="logout-btn" class="logout-btn"><i class="fas fa-sign-out-alt"></i> Logout</a>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="main-content">
            <!-- Top Navigation Bar -->
            <header class="top-nav">
                <div class="nav-left">
                    <button class="sidebar-toggle"><i class="fas fa-bars"></i></button>
                    <h3 id="current-section">Dashboard</h3>
                </div>
                <div class="nav-right">
                    <div class="user-profile">
                        <img src="https://via.placeholder.com/40" alt="User">
                        <span id="current-username">Admin</span>
                    </div>
                </div>
            </header>

            <!-- Content Sections -->
            <div class="content-area">
                <!-- Dashboard Section -->
                <div id="dashboard-section" class="content-section active">
                    <div class="welcome-message">
                        <h2>Welcome, <span id="welcome-username">Admin</span>!</h2>
                        <p>Last login: <span id="last-login"></span></p>
                    </div>
                    <div class="stats-row">
                        <div class="stat-card">
                            <div class="stat-icon bg-blue">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="stat-info">
                                <h3 id="customer-count">0</h3>
                                <p>Total Customers</p>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon bg-green">
                                <i class="fas fa-cogs"></i>
                            </div>
                            <div class="stat-info">
                                <h3 id="machine-count">0</h3>
                                <p>Total Machines</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Customer Info Section -->
                <div id="customer-info-section" class="content-section">
                    <div class="section-header">
                        <h2>Customer Information</h2>
                        <button id="add-customer-btn" class="btn btn-primary">Add Customer</button>
                    </div>
                    <div class="table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Registration Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="customer-table-body">
                                <!-- Customer data will be inserted here by JavaScript -->
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Machine Info Section -->
                <div id="machine-info-section" class="content-section">
                    <div class="section-header">
                        <h2>Machine Information</h2>
                        <button id="add-machine-btn" class="btn btn-primary">Add Machine</button>
                    </div>
                    <div class="table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Model</th>
                                    <th>Serial Number</th>
                                    <th>Manufacturer</th>
                                    <th>Installation Date</th>
                                    <th>Customer</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="machine-table-body">
                                <!-- Machine data will be inserted here by JavaScript -->
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Settings Section -->
                <div id="settings-section" class="content-section">
                    <div class="settings-form-container">
                        <h2>Account Settings</h2>
                        <form id="change-password-form">
                            <div class="form-group">
                                <label for="current-password">Current Password</label>
                                <input type="password" id="current-password" name="current-password" required>
                            </div>
                            <div class="form-group">
                                <label for="new-password">New Password</label>
                                <input type="password" id="new-password" name="new-password" required>
                            </div>
                            <div class="form-group">
                                <label for="confirm-password">Confirm New Password</label>
                                <input type="password" id="confirm-password" name="confirm-password" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Change Password</button>
                            <div id="password-change-message" class="message"></div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- Customer Modal -->
    <div id="customer-modal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2 id="customer-modal-title">Add Customer</h2>
            <form id="customer-form">
                <input type="hidden" id="customer-id">
                <div class="form-group">
                    <label for="customer-name">Name</label>
                    <input type="text" id="customer-name" required>
                </div>
                <div class="form-group">
                    <label for="customer-email">Email</label>
                    <input type="email" id="customer-email" required>
                </div>
                <div class="form-group">
                    <label for="customer-phone">Phone</label>
                    <input type="tel" id="customer-phone" required>
                </div>
                <div class="form-group">
                    <label for="customer-address">Address</label>
                    <textarea id="customer-address" rows="3" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
            </form>
        </div>
    </div>

    <!-- Machine Modal -->
    <div id="machine-modal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2 id="machine-modal-title">Add Machine</h2>
            <form id="machine-form">
                <input type="hidden" id="machine-id">
                <div class="form-group">
                    <label for="machine-model">Model</label>
                    <input type="text" id="machine-model" required>
                </div>
                <div class="form-group">
                    <label for="machine-serial">Serial Number</label>
                    <input type="text" id="machine-serial" required>
                </div>
                <div class="form-group">
                    <label for="machine-manufacturer">Manufacturer</label>
                    <input type="text" id="machine-manufacturer" required>
                </div>
                <div class="form-group">
                    <label for="machine-installation">Installation Date</label>
                    <input type="date" id="machine-installation" required>
                </div>
                <div class="form-group">
                    <label for="machine-customer">Customer</label>
                    <select id="machine-customer" required>
                        <option value="">Select Customer</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="machine-status">Status</label>
                    <select id="machine-status" required>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Maintenance">Maintenance</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
            </form>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
