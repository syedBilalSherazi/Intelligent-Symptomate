const users = [
    { username: 'testuser', password: 'password123' },
    { username: 'demo', password: 'demo123' }
];

document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    users.push({ username, password });
    alert('User registered successfully!');
    window.location.href = 'login.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful!');
        window.location.href = 'detect.html';
    } else {
        alert('Invalid credentials!');
    }
});
