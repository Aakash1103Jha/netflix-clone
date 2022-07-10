import { lazy, Suspense, type FC } from "react";
import { Route, Routes } from "react-router";

import Loader from "./components/Loader/Loader";

const Welcome = lazy(() => import("./pages/Welcome/Welcome"));

const App: FC = () => {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<Loader />}>
							<Welcome />
						</Suspense>
					}
				/>
			</Routes>
		</>
	);
};

export default App;
