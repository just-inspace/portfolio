import { useContext } from "react";
import { __RouterContext } from "react-router-dom";

/**
 * useRouter Context Control
 *
 *
 * @export useRouter function
 * @returns context for RouterContext
 */

export default function useRouter() {
	return useContext(__RouterContext);
}
