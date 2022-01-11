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
Join the Shamba Discord server to get help implementing the setup above (https://discord.com/invite/jwMysGu7g4) 

