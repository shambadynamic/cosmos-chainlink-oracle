# Shamba-Cosmos
This repo implements a connection between the Shamba [Chainlink](https://chain.link/) oracle serving geospatial data and an application specific [Cosmos](https://cosmos.network/) blockchain.

## How it works
[Starport](https://cosmos.network/starport/) is used to set up an application specific Cosmos blockchain that can store geospatial data from the Shamba Chainlink oracle.

A WebSocket client subscribes to transaction events coming from a [Tendermint node](https://tendermint.com/core/) in this Cosmos blockchain.

This websocket client is a [Chainlink external initiator](https://docs.chain.link/docs/external-initiators-introduction/).

When it logs a transaction that indicates that a user requested some data, it triggers a [Chainlink external adapter](https://docs.chain.link/docs/external-adapters/).

This external adapter requests the Shamba Chainlink oracle to provide the required data, then creates a transaction with the data on the Cosmos blockchain. 

The parameters in the user request can be changed to specify different datasets and analysis to the Shamba geospatial oracle.

This setup can be used by any application specific blockchain on Cosmos that needs to consume geospatial data.


## Available Data
All the geospatial datasets and analytics indicated on the Shamba Documentation (https://docs.shamba.app) can be accessed using the above setup.

## Support
Join the Shamba Discord server to get more information about the setup above (https://discord.com/invite/jwMysGu7g4) 

## Live Demo Instructions
1. Open the Frontend running on http://165.232.134.108:8080/types 

2. Click on "Access wallet" -> "Import existing wallet".

3. Then, in recovery phrase, copy and paste the following:

        
        fan strategy winner invite foam winter embark now tortoise half lawsuit tape sadness because super cry flame friend divert radar tip drop guide pair

4. Provide a username and password for the wallet you just imported.

5. Fill the 'New Data' form on the left hand panel with the following information:

Requester: *the-cosmos-wallet-address-you-imported*
AggX: agg_mean
DatasetCode: COPERNICUS/S2_SR
SelectedBand: NDVI
ImageScale: 250
StartDate: 2021-09-01
EndDate: 2021-09-20

6. You can specify the code for any dataset indicated at https://docs.shamba.app  but ensure you give the correct corresponding band and scale.

NB: Parameters [DatasetCode: , SelectedBand: ,  ImageScale: ] come as a set and are indicated for each dataset in the documentation. Don't mix them up.

7. You can also try specifiying different past dates (avoid long date ranges though)

8. After providing the input parameters, click the 'Create Data' button

9. Once the oracle job has run successfully, the data request process gets completed and you can see the result in the value of "AggX" on the Frontend.

10. All the previous data requests and responses are shown on the frontend. You need to scroll down on the right hand panel to find your recent request and response 

11. You can also see the complete result of your request and the blockchain information on http://165.232.134.108:3000

12. Geometry parameter is currently specified in the main.go file of the external initiator used in this demo.


