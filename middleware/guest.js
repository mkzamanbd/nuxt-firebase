export default function({$fire, redirect}){
    // let user = $fire.auth.currentUser
    // console.log(user);
    console.log("guest middleware");

    // Only available on the Client-side
  if (process.client) {
        console.log('client');
        
    }
    console.log($fire.auth.currentUser);

    /* if($fire.auth.user){
        redirect('/admin')
    } */
}