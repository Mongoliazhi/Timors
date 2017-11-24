
module.exports = function returnData(data,errCode,result,errorMsg){
    var Data = {
        "data": data,
        "errCode": errCode,
        "result": result,
        "errorMsg": errorMsg,
    }
    return Data
}