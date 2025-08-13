# Node.js Dual Server with Nginx Reverse Proxy (AWS Deployment Practice)

This repository contains two basic Node.js server files running on different ports (**3000** and **3001**) and an **Nginx** configuration to route them through a single port on the same AWS EC2 instance.  
It’s a simple setup created for **learning purposes** — to practice deploying Node.js apps on AWS and configuring Nginx as a reverse proxy.

---

## Project Overview
* **Server 1:** Runs on port 3000  
* **Server 2:** Runs on port 3001  
* **Nginx:** Routes incoming traffic on a single public port (e.g., 80) to the correct Node.js server based on URL paths.

---

## Prerequisites
* AWS EC2 instance (Ubuntu preferred)  
* Node.js & npm installed  
* Nginx installed  
* SSH access to the instance  

---

## How to Run

### 1. Clone the repo
```bash
https://github.com/ironor25/Ngnix_Proxy_Servers.git
cd your-repo-name
```

### 2. Install dependencies (if any)
```bash
npm install
```

### 3. Start the servers
```bash
node shoe-server.js
node cloth-serv.js
```
> For production, use a process manager like **PM2** to keep them running.

---

## Nginx Setup
Example Nginx config:
```nginx
events {
    # Event directives...
}

http {
	server {
    listen 80;
    server_name http://shoeshop.deepakyadav.work.gd;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
	}

    server {
    listen 80;
    server_name http://clothshop.deepakyadav.work.gd;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
	}
}
```

After editing the config:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## Purpose of This Repo
This project is **not** a real-world application.  
It’s purely to:
* Learn how to deploy Node.js servers on AWS  
* Understand Nginx reverse proxy basics  
* Practice serving multiple apps from one EC2 instance  

---

## License
MIT License — feel free to use for learning.
