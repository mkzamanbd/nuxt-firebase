export default function({$fire, redirect}){
    console.log("auth middleware");
    console.log($fire.auth.currentUser);
    if(!$fire.auth.user){
       redirect('/')
    }
}