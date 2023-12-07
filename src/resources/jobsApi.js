const base = "https://dev.careers.finnovationz.com:3200/api";

/**
 * Get all jobs
 * @param {*} dataSetter Invoked with fetched data passed in argument.
 */
export async function getJobs(dataSetter) {
  var myHeaders = new Headers();
  myHeaders.append("secret", "fuLicuJBQ4u2Pzq74oziswvkd2n2CZ60GinN7555Q3Y=");
  myHeaders.append(
    "Cookie",
    "connect.sid=s%3ALp_KcdMGobPzx9n4tuamODv2uewrhn7r.tmchGu4Ry0w6wtYP%2BsdF7RuuDpYHZIMKi3ZgjIxdQe4"
  );
  myHeaders.append("Content-Type", "application/json");

  // myHeaders.append("jobtype", "1");

  fetch(`${base}/v1/fetch/latestJobs`, {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((result) => dataSetter(result.data))
    .catch((error) => console.log("error", error));
}

/**
 *
 * @param {*} data Data to apply for a job role
 * @returns {boolean} Application success or not
 */
export async function applyForJob(data) {
  var myHeaders = new Headers();
  myHeaders.append("secret", "fuLicuJBQ4u2Pzq74oziswvkd2n2CZ60GinN7555Q3Y=");
  myHeaders.append("Content-Type", "application/json");

  try {
    const response = await fetch(`${base}/v1/applyJob`, {
      method: "POST",
      headers: myHeaders,
      body: data,
    });
    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
}

/**
 * 
 * @param {*} jobId 
 * @param {*} dataSetter Invoked with fetched data passed in argument.
 */
export async function getJobDetails(jobId, dataSetter) {}
