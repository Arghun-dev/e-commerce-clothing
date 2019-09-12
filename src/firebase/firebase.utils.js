import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyA9UvZhTOP3yNIeIR0qDOaFtirTkAZQzd8",
    authDomain: "crwn-db-e0334.firebaseapp.com",
    databaseURL: "https://crwn-db-e0334.firebaseio.com",
    projectId: "crwn-db-e0334",
    storageBucket: "",
    messagingSenderId: "83293737992",
    appId: "1:83293737992:web:bd7f283122959d2f4f2dbd"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;