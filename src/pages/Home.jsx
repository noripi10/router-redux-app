import React from 'react';
import { Container } from '@material-ui/core';

// import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { AuthContext } from '../context/AuthProvider';
import { HeaderBar, MenuItem } from '../components';

const Home = () => {
	// const { logout } = useContext(AuthContext);
	// const history = useHistory();
	// const auth = useSelector((state) => state.auth);

	return (
		<>
			<HeaderBar title={'ホーム'} />
			<Container>
				<MenuItem />
			</Container>
		</>
	);
};

export default Home;
