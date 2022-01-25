import logging
import azure.functions as func

def main(inputBlob: func.InputStream, outputBlob: func.Out[bytes]):
    logging.info(f"\n*****************************************************\n"
                f"<Start of GBB Demo>\n"
                f"Python blob trigger function processed blob \n"
                f"Name: {inputBlob.name}\n"
                f"Blob Size: {inputBlob.length} bytes\n"
                f"<End of GBB Demo>\n"
                f"**********************************************************\n")
    
    # my_test = inputBlob.read().decode('utf-8')
    logging.info(f"Copy {inputBlob.name} to {outputBlob}\n")

    outputBlob.set(inputBlob.read())
    