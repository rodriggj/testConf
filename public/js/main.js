const SF_BASE_URI = `https://e2edemo.my.salesforce.com`
const SF_BEARER_TOKEN = `00D5f000003vd1P!ARUAQPxvwJ38oAnEQliDDpSg1yABw2BI9d07esejZgQ2n75fnYsNsaGtXTjyhnmgPd1esAEe97uQvwtL8JKbO3S9AOiKn3Gg`

window.addEventListener('load', (event) => {
  var speaker_data = null;
  var session_data = null;
  
  var speaker_config = {
    method: 'post',
    url: `${SF_BASE_URI}/services/data/v51.0/sobjects/Speaker__c?Content-Type=application/json&sObject=Speaker__c`,
    headers: { 
      'Authorization': `Bearer ${SF_BEARER_TOKEN}`, 
      'Access-Control-Allow-Origin': '*',
      'X-PrettyPrint': '1', 
      'Content-Type': 'application/json'
    },
    data : speaker_data
  };
  
  var session_config = {
    method: 'post',
    url: `${SF_BASE_URI}/services/data/v51.0/sobjects/Session__c?Content-Type=application/json&sObject=Session__c`,
    headers: { 
      'Authorization': `Bearer ${SF_BEARER_TOKEN}`, 
      'Access-Control-Allow-Origin': '*',
      'X-PrettyPrint': '1', 
      'Content-Type': 'application/json', 
    },
    data : session_data
  };

  axios(speaker_config)
  .then(function (response) {
    console.log(`Warmup Speaker call...`)
  })
  .catch(function (error) {
    console.log('Something went wrong with Speaker POST...')
    console.log(error);
  });

  axios(session_config)
  .then(function (response) {
    console.log(`Warmup Session call...`)
  })
  .catch(function (error) {
    console.log('Something went wrong with Session POST...')
    console.log(error);
  });
});

document.getElementById('sfdc_btn').addEventListener('click', ()=>{
  let fn = document.getElementById('firstName').value;
  let ln = document.getElementById('lastName').value;
  let email = document.getElementById('inputEmail4').value;
  let bio = document.getElementById('bio').value;
  let topic = document.getElementById('topic').value;
  let title = document.getElementById('title').value;
  let diff = document.getElementById('difficulty').value;
  let sType = document.getElementById('sessionType').value;

  var speaker_data = JSON.stringify({
    "Bio__c": bio,
    "First_Name__c": fn,
    "Last_Name__c": ln,
    "Email__c": email
  });

  var session_data = JSON.stringify({
    "Description__c": topic,
    "Level__c": diff,
    "Session_Date__c": "2022-03-16T19:00:00.000+0000",
    "Name": title
  })
  
  var speaker_config = {
    method: 'post',
    url: `${SF_BASE_URI}/services/data/v51.0/sobjects/Speaker__c?Content-Type=application/json&sObject=Speaker__c`,
    headers: { 
      'Authorization': `Bearer ${SF_BEARER_TOKEN}`, 
      'Access-Control-Allow-Origin': '*',
      'X-PrettyPrint': '1', 
      'Content-Type': 'application/json'
    },
    data : speaker_data
  };
  
  var session_config = {
    method: 'post',
    url: `${SF_BASE_URI}/services/data/v51.0/sobjects/Session__c?Content-Type=application/json&sObject=Session__c`,
    headers: { 
      'Authorization': `Bearer ${SF_BEARER_TOKEN}`, 
      'Access-Control-Allow-Origin': '*',
      'X-PrettyPrint': '1', 
      'Content-Type': 'application/json', 
    },
    data : session_data
  };

  axios(speaker_config)
  .then(function (response) {
    console.log('Speaker Post successful...')
    console.log(response.data);
  })
  .catch(function (error) {
    console.log('Something went wrong with Speaker POST...')
    console.log(error);
  });

  axios(session_config)
  .then(function (response) {
    console.log('Session Post successful...')
    console.log(response.data);
  })
  .catch(function (error) {
    console.log('Something went wrong with Session POST...')
    console.log(error);
  });
})

console.log(`BaseURI: ${SF_BASE_URI} BearerToken: ${SF_BEARER_TOKEN}`)
