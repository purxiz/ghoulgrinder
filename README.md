#### Ghoul Grinder
nodejs and npm  
`curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -`  
`sudo apt install -y nodejs`  
  
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
