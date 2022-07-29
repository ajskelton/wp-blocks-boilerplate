import { registerBlockType } from '@wordpress/blocks';
import json from './block.json';
import './style.scss';
import Edit from './edit';
import save from './save';

const { name } = json;

registerBlockType(name, {
	edit: Edit,
	save,
});
