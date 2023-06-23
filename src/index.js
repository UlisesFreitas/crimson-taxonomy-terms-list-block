import './styles/editor.css';
import { registerBlockType } from '@wordpress/blocks';
import Edit from './components/Edit';

const BLOCK_NAME = 'crimson-taxonomy-terms-list/block';

registerBlockType(BLOCK_NAME, {
	edit: Edit,
});
