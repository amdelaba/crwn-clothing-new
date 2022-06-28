import { Fragment, useContext, } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesContext } from '../../context/categories.context';

const CategoriesPreview = () => {

  const { categoriesMap } = useContext(CategoriesContext);

  return(

    <Fragment>
    {
      Object.keys(categoriesMap).map((categoryTitle) => {
        const products = categoriesMap[categoryTitle];
        return <CategoryPreview title={categoryTitle} products={products} />
      })}
    </Fragment>
  );

};

export default CategoriesPreview;