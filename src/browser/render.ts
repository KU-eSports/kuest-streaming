import { ReactNode } from "react";
import { createRoot } from "react-dom/client";

import "modern-normalize";

export const render = (app: ReactNode) => {
	const container = document.getElementById("root");
	if (container) {
		createRoot(container).render(app);
	} else {
		throw new Error("#root element not found");
	}
};
