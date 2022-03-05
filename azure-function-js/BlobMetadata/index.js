const { BlobServiceClient, BlockBlobClient } = require('@azure/storage-blob');
const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.AZURE_STORAGE_CONNECTION_STRING
);

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const files = req.body && req.body.files;
    const containerInputClient = blobServiceClient.getContainerClient('input');
    const containerOutputClient = blobServiceClient.getContainerClient('output');

    // status: 200, /* Defaults to 200 */
    let responseArray = await Promise.all(files.map(async fileObj => {
        // get input blob by name
        const inputBlob = containerInputClient.getBlobClient(fileObj.FileName);
        // set metadata
        await inputBlob.setMetadata({"comments": fileObj.Comments});
        // create blob in output container with new name
        const outputBlob = containerOutputClient.getBlobClient(fileObj.FileName & "-Copy");
        // copy original blob to new blob (requires shared access signature)
        // await outputBlob.syncCopyFromURL(inputBlob.url);
        // add blob to new array to return to client
        return {"FileName": outputBlob.url};
    }));

    context.res = {
        body: responseArray
    }
}