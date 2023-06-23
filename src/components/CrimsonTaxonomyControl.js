import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const CrimsonTaxonomySelector = ({ selected, onChange, taxonomies }) => {
	return (
		<SelectControl
			label={__('Display terms from this taxonomy', 'crimson-taxonomy-terms-list-block')}
			value={selected}
			options={[
				{
					label: __('-- Select a taxonomy --', 'crimson-taxonomy-terms-list-block'),
					value: '',
				},
				...taxonomies.map(({ name, slug }) => ({
					label: name,
					value: slug,
				})),
			]}
			onChange={onChange}
		/>
	);
};

export default CrimsonTaxonomySelector;
