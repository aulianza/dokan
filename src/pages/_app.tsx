import { plusJakartaSansFont } from "@/common/theme/font";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import Layout from "@/common/components/layouts";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={plusJakartaSansFont.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}
