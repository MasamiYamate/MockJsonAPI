# MockJsonAPI

Mock API tool that just returns JSON

## Description

Mock API tool whose endpoint is the path of the JSON file saved in the directory.
You cannot use queries, but you can easily return the contents of the given JSON file as API response data.

## Installation
Clone this repository.
```sh
git clone git@github.com:MasamiYamate/MockJsonAPI.git
```

## Setup
Place the json file to be the response data under the data directory.  
The correspondence between the directory path and the endpoint path is as follows.  
  
### Example
**Directory path**  
``./data/driverlist.json``  
**Endpoint path**  
``http://localhost:3000/driverlist``  

**Directory path**  
``./data/list/driver.json``  
**Endpoint path**  
``http://localhost:3000/list/driver``

## Usage
Run command
``npm start``