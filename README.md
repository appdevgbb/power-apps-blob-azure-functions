# Power Apps, Azure Functions (Python) and Blob Storage Demo

This sample application uses a combination of Power Apps, Azure Functions (python) and Azure Blob Storage.

![AzureFunctionsAzureBlob](https://user-images.githubusercontent.com/3240777/150886488-9a9f23fc-0a40-4e4d-8365-4764108a6ccf.png)

### Prerequisites 📝

* Access to Power Apps + premium connectors - Needed for the Blob Storage Connection:
  * [Developer Plan](https://powerapps.microsoft.com/en-us/developerplan)
 
### Setup Power App 🔧

* [Import Power Apps solution](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/import-update-export-solutions) in this repository.
  * You will be prompted to create new connections for your Blob Storage instance in Azure.
  * Replace the environment variable value with the url of the Blob Storage instance (for example: *mytest001.blob.windows.net*)
     * [Setting environment variable](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/environmentvariables#enter-new-values-while-importing-solutions)
* Open the Power App and set the global variables
  * In **App** > **OnStart**, set the *varAzureBlobEndpoint* to point to the fqdn of your Azure Blob Storage: e.g.: https://MYBLOB.blob.core.windows.net).
  * Save the Canvas Application, close and reopen the application to refresh the global variables.
  
### Using the Power App 🤹

* Click on Upload file.
* Select a local file on your computer.
* Verify results on Blob Storage.

<img width="1342" alt="Upload File to Blob" src=https://user-images.githubusercontent.com/3240777/150886426-a304e277-a34d-4bab-ab89-766e91236810.png>

### Additional Resources 🎁
* [Azure Blob storage output binding for Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-output?tabs=python)
* [Azure Blob storage trigger for Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger?tabs=python)
* [How to Use Power Apps to Upload a File](https://www.powerapps911.com/post/how-to-use-power-apps-to-upload-a-file)
