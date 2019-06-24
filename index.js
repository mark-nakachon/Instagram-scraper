const axios = require('axios');
const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'username',
    message: 'what is your instagram username?'
  });
  console.log(response);
  getData(response.username);
})();

async function getData(username){
    try{
    const {data} = await axios.get(`https://www.instagram.com/${username}/?__a=1`);
    //console.log(data);
    //const biography = data.graphql.user.biography;
    const {user} = data.graphql
    //'console.log(user);
    console.log(`${user.full_name} \n ${user.biography} \n has ${user.edge_followed_by.count} no of followers and following
    ${user.edge_follow.count} \n you can view profile pic at ${user.profile_pic_url}`);
    }
    catch(err){
        console.log(`failed to fetch the data`);
    }
}