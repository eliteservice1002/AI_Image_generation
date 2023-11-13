import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 907,
        canvasWidth: 974,
        windowWidth: 1920,
        canvasHeight: 36
    }
});
