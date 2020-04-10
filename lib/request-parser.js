module.exports = {
    dataRequestPath
}

function dataRequestPath(dataBasePath, request) {
    const requestPath = extractionRequestPath(request);
    const dataPath = dataBasePath + requestPath + ".json";
    return dataPath;
}

function extractionRequestPath(request) {
    return request.baseUrl;
}