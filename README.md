#### Ghoul Grinder
nodejs and npm  
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -    
sudo apt install -y nodejs  
```  
  
apache2  
`sudo apt install apache2`  
  
symlink public folder into /var/www/html  
Something like `ln -s /path/to/ghoulgrinder/public /var/www/html/public`  
  
phaser  
can just use CDN, see index.html in public, but should git clone it wherever you want to look at source code  

install required npm packages  
```
cd server
npm init
npm install
```

install and set up user for mysql
```
sudo apt install mysql-server
sudo mysql -u root
mysql> USE mysql;
mysql> CREATE USER 'YOUR_SYSTEM_USER'@'localhost' IDENTIFIED BY '';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'YOUR_SYSTEM_USER'@'localhost';
mysql> UPDATE user SET plugin='auth_socket' WHERE User='YOUR_SYSTEM_USER';
mysql> FLUSH PRIVILEGES;
mysql> exit;
```
In the future, use mysql simply with `mysql` from command line
Also, it is best practice to make a non-root database user for node-js
```
CREATE DATABASE ghoulgrinder;
CREATE USER 'ghoulgrinder'@'localhost' IDENTIFIED BY 'dev_secret';
GRANT ALL PRIVILEGES ON ghoulgrinder . * TO 'ghoulgrinder'@'localhost';
FLUSH PRIVILEGES;
```
Do note we really shouldn't grant all privileges, but that's a better coding practice thing so I'm just an idiot.
