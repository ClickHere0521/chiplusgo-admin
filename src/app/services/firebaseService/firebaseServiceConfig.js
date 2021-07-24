const prodConfig = {
	apiKey: 'AIzaSyC4Hn2h9avEH_nsDUmLDMuQecQTR7GuoNY',
	authDomain: 'chiplusgo-95ec4.firebaseapp.com',
	projectId: 'chiplusgo-95ec4',
	storageBucket: 'chiplusgo-95ec4.appspot.com',
	messagingSenderId: '977699320680',
	appId: '1:977699320680:web:96c42f4a1d3f96c1681cdd',
	measurementId: 'G-75HQ2HXV9D'
};

const devConfig = {
	apiKey: "AIzaSyBipLXdrseVzXDV0j2lRd7GPYjhUNamT_Y",
    authDomain: "chiplusgo-production.firebaseapp.com",
    projectId: "chiplusgo-production",
    storageBucket: "chiplusgo-production.appspot.com",
    messagingSenderId: "998712508083",
    appId: "1:998712508083:web:31cdac235d2e88fb887ac6",
    measurementId: "G-VVTEDVS66G"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
