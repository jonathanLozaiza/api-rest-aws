import app from "./app"
import "@babel/polyfill"

function main(){
    app.listen(4000);
    console.log("server run on port 4000")
}

main();