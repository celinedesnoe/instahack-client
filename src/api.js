import axios from "axios";

// create an Axios object with pre-configured settings
const backendApi = axios.create({
  baseURL: "http://localhost:5555",
  // send cookies to the backend on every request (for logged-in users)
  withCredentials: true
});

// allows us to replace axios.get("http://localhost:5555/api/phones") with axios.get("/api/phones");

function errorHandler(err) {
  if (err.response && err.response.data) {
    console.log("API Error", err.response.data);
  } else {
    console.log("React Code Error", err);
  }

  // alert a generic message for the user
  alert("Sorry! Something went wrong. Try again later.");

  // cause the error again so the .then() won't be called
  throw err;
}

export function postSignUp(userSubmission) {
  return backendApi
    .post("/api/process-signup", userSubmission)
    .catch(errorHandler);
}

export function postLogIn(loginCredentials) {
  console.log(loginCredentials);
  return backendApi
    .post("/api/process-login", loginCredentials)
    .catch(errorHandler);
}

export function getLogOut() {
  return backendApi.get("/api/logout").catch(errorHandler);
}

export function getUserProfile(username) {
  return backendApi.get(`/api/${username}`).catch(errorHandler);
}

export function getUserProfileFollowers(username) {
  return backendApi.get(`/api/${username}/followers`).catch(errorHandler);
}

export function getUserProfileFollowing(username) {
  return backendApi.get(`/api/${username}/following`).catch(errorHandler);
}

// export function getPosts(someUser) {
//   return backendApi.post("/api/posts", someUser).catch(errorHandler);
// }

export function getPostDetails(postId) {
  return backendApi.get(`/api/p/${postId}`).catch(errorHandler);
}

export function getUserToUnfollow(userId) {
  return backendApi.post("/api/process-unfollow", userId).catch(errorHandler);
}

export function getUserToFollow(userId) {
  return backendApi.post("/api/process-follow", userId).catch(errorHandler);
}

export function editUser(editedUser) {
  return backendApi.post("/api/process-edit", editedUser).catch(errorHandler);
}

export function postComment(newComment) {
  return backendApi
    .post("/api/process-comment", newComment)
    .catch(errorHandler);
}

// export function checkEmail(someEmail) {
//   return backendApi.post("/api/process-email", someEmail).catch(errorHandler);
// }

// export function checkUsername(someUsername) {
//   return backendApi
//     .post("/api/process-username", someUsername)
//     .catch(errorHandler);
// }
