import { useContext } from 'react';
import { RouterContext } from '../contexts';

export default function useRouteContext() {
    const values = useContext(RouterContext);
    return { ...values };
}
