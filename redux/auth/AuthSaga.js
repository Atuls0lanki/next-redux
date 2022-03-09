import { all, call, put, takeLatest } from "redux-saga/effects";
import { AUTH_SIGN_UP } from "..";

function* SignUpSaga({ data }) {
  console.log("data");
  //   let apiData = {
  //     data: data.data,
  //     method: "POST",
  //     toast: true,
  //     endpoint: "user/register",
  //     headers: {
  //       "content-type": "application/json",
  //       Authentication: `Bearer ${myEncrypt(data.data.email)}}`,
  //     },
  //   };
  //   const response = yield call(StaticApiCall, apiData);
  //   if (response.error) {
  //     data.onFailed();
  //   } else {
  //     data.onSuccess();
  //     yield put(AuthSaveUser({ loggedIn: true, ...response.data }));
  //     const a = { access: response.data.access, refresh: response.data.refresh };
  //     UpdateToken(a);
  //   }
}

export default all([takeLatest(AUTH_SIGN_UP, SignUpSaga)]);
