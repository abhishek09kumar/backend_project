const asyncHandler = (requestHandler) => {
    return (err,req, res, next) => {
        Promise.resolve(requestHandler(err,req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }





/* const asyncHandler =(requestHandler)=>{
    return (err,req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=> next(err))
    }

}

export {asyncHandler}

*/