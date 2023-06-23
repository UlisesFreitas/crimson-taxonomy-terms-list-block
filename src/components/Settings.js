import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import CrimsonTaxonomySelector from './CrimsonTaxonomyControl';
import { __ } from '@wordpress/i18n';

const Settings = ({ taxonomies, attributes, setAttributes }) => {
	const { term, textAlign, separator, title } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody>
					<CrimsonTaxonomySelector
						taxonomies={taxonomies}
						selected={term}
						onChange={(value) => {
							setAttributes({ term: value });
						}}
					/>
				</PanelBody>
				<PanelBody>
					<TextControl
						autoComplete="off"
						label={__('Separator', 'crimson-taxonomy-terms-list-block')}
						value={separator || ''}
						onChange={(nextValue) => {
							setAttributes({ separator: nextValue });
						}}
						help={__(
							'Enter character(s) used to separate terms.',
							'crimson-taxonomy-terms-list-block'
						)}
					/>
					<TextControl
						autoComplete="off"
						label={__('Title', 'crimson-taxonomy-terms-list-block')}
						value={title || ''}
						onChange={(nextValue) => {
							setAttributes({ title: nextValue });
						}}
						help={__(
							'Title prefixed to the list of elements.',
							'crimson-taxonomy-terms-list-block'
						)}
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(nextAlign) => {
						setAttributes({ textAlign: nextAlign });
					}}
				/>
			</BlockControls>
		</>
	);
};

export default Settings;
