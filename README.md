# A Tender Management System Front-End with React
This project assumes you have all npm and npx and yam dependencies installed

### The Project Screenshots are at the bottom of this page

## PROJECT SCREENSHOTS
### LOGIN PAGE
![Screenshot from 2023-03-16 06-20-35](https://user-images.githubusercontent.com/46927702/225514397-6bbdf156-e3a3-45ef-b040-3180d9c4ff76.png)

### REGISTRATION PAGE
![Screenshot from 2023-03-16 06-20-44](https://user-images.githubusercontent.com/46927702/225514521-7378693a-2170-44a0-87a6-6a52e4acfc46.png)

### DASHBOARD PAGE
![Screenshot from 2023-03-![Screenshot from 2023-03-16 06-21-03](https://user-images.githubusercontent.com/46927702/225514610-bce6e32b-3178-4e8b-bb94-9cea3bee82e9.png)
16 06-20-57](https://user-images.githubusercontent.com/46927702/225514574-ae643475-8ae9-4a6e-8c0d-11401463d992.png)

### TENDERS PAGE
![Screenshot from 2023-03-16 06-21-21](https://user-images.githubusercontent.com/46927702/225514675-194a78ea-2378-4683-a30e-3e51eafc606d.png)
![Screenshot from 2023-03-16 06-21-27](https://user-images.githubusercontent.com/46927702/225514775-3bc8c4a3-7b9b-4fa5-9509-0d58d509541d.png)
![Screenshot from 2023-03-16 06-21-31](https://user-images.githubusercontent.com/46927702/225514813-71ba8eef-5108-498d-87cc-63e372d074f9.png)

### SINGLE TENDER DESCRIPTION PAGE
![Screenshot from 2023-03-16 06-21-44](https://user-images.githubusercontent.com/46927702/225514983-bb46e6a4-460b-43d9-9d0a-34c5377bf5b2.png)
![Screenshot from 2023-03-16 06-21-51](https://user-images.githubusercontent.com/46927702/225515006-9ea7a54a-12a6-4894-8905-de21565376de.png)



# Project Configurations
##### These steps can be ignored and simply run the command below
```shell 
yarn start
```

##### Create the React App
```terminal
npx create-react-app .
```
##### Ensuring it runs
Expect to face a problem/challenge with the watchtime error, on unix/linux devices run the below commands

```terminal
# insert the new value into the system config
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

# check that the new value was applied
cat /proc/sys/fs/inotify/max_user_watches
```
##### Start/Run the program
```shell
#Contrary to the code use the yarn command for better performance
> yarn start
```

##### Shortcuts
```reactjs
rfc -> (enter on keyboard)

```

##### Install Bootstrap
```shell
> yarn add bootstrap react-bootstrap
#Read on using react with Bootstrap on https://react-bootstrap.github.io/getting-started/introduction/
```
##### Go to Font Awesome CDN and paste this link in the index.html

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
````
##### Add the react router dom for urls

```shell
yarn add react-router-dom
```
##### Start the Project
```shell
yarn start
```













