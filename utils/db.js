const { default: mongoose } = require("mongoose")

const connectToDB = async()=>{

    try {
        if(mongoose.connections[0].readyState){
            return false;
        }else{

            await mongoose.connect(process.env.NEXT_PUBLIC_DB_URL)
            console.log("Connect To DB Successfully")
        } 
    } catch (err) {
        console.log("DB Connection Error =>",err)
    }


    
}

export default connectToDB;