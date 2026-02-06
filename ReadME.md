# Azure Static Website Deployment using Azure CLI

This project demonstrates how to deploy a static website to **Microsoft Azure** using the **Azure CLI** instead of the Azure Portal.

This deployment also uses **Azure CLI Interactive Mode**, a newer Azure CLI feature that provides guided prompts, inline help, and improved command discovery while still maintaining full control.
## Tech Stack

- HTML
- CSS
- JavaScript
- Azure Static Web Apps 
- Azure CLI (Interactive Mode)
- GitHub

## Project Structure
/  
├── index.html  
├── style.css  
├── script.js  
└── README.md

## Prerequisites

Before starting, ensure you have:

- An active Azure subscription
- Azure CLI installed
- Git installed
- A GitHub repository

Login to Azure: az  login --use-device-code 

To Enable Azure CLI Interactive Mode:

`az interactive`

---

## Step 1: Create Resource Group

The resource group is used to logically organize all Azure resources related to this project.

### Command Used

az>> group create --location uaenorth --name Static_WebCLI
--location(Required Field):This is used to specify the location where the resource group should be deployed 
--name(Required Field):Name of the Resource Group

<img width="1106" height="303" alt="Screenshot 2026-02-03 154246" src="https://github.com/user-attachments/assets/9a5896fc-e9c5-40d6-b00d-6d17998ed842" />




--- 
## Step 2: Create Azure Static Web App

This step creates the Azure Static Web App and links it to the GitHub repository for automated deployments.

### Command Used

az>> staticwebapp create --name SimpleWeb --location eastasia --app-location "/" --resource-group Static_WebCLI --source "https://github.com/akashn-oss/Azure-Static-File-CLI.git" --branch "main" --login-with-github

create: This command used to create staticwebapp.
`--name` (Required Field): Name of the website.
`--location` (Required Field): Location where the Website should be hosted.(Static webapps have a limited options in locations compared to other services).
`--app-location`: Specifies where the app is present in the directory. Here "/" represents the root `directory.
`--resource-group` (Required Field): Resource group under which this resource is made.
`--source`: To provide source from which the code should be fetched(Here I have used GitHub).
`--branch`: Tells from which branch the code should be fetched.
`--login-with-github` enables GitHub authentication via device code so Azure can access the repository and set up automated deployments.

### Screenshot

<img width="1733" height="972" alt="Screenshot 2026-02-05 182531" src="https://github.com/user-attachments/assets/9fb1352a-6fc5-4de5-b458-20dc1b9c7d0c" />




---

## Step 3: Getting name through --query option 

CLI provides options such as `--query` which allows to filter the output.
### Command Used
az>> staticwebapp show --name SimpleWeb --query defaultHostname
 <img width="785" height="49" alt="Screenshot 2026-02-05 184610" src="https://github.com/user-attachments/assets/f021c88c-3f80-4146-b1bf-47c886c436c1" />


## Step 4: Access the Live Website

Once deployment completes, retrieve the website URL.

### URL: "gentle-desert-093dae400.1.azurestaticapps.net"

### Screenshot

<img width="1912" height="990" alt="Screenshot 2026-02-05 184957" src="https://github.com/user-attachments/assets/069f9fc1-b954-4b65-ac30-95f059159249" />


---
## Key Learnings

- Azure CLI enables reproducible infrastructure
    
- Interactive Mode improves usability without sacrificing power
    
- Azure Static Web Apps are ideal for frontend-only projects
    
- CLI-based workflows scale better than portal-based workflows when multiple actions is to be performed in a limited amount of time


