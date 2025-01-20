import React, { FC } from 'react';
import { BrowserRoute } from '../../libs/routes';
import { Route, Switch } from "react-router-dom";
import { CategoryPage } from './CategoryPage';
import { BrowserRecommendationsPage } from './BrowserRecommendationsPage';

const BrowserPage: FC = () => {
    return (
        <Switch>
            <Route path={`${BrowserRoute.category}/:id`} component={CategoryPage} />
            <Route path="*" component={BrowserRecommendationsPage} />
        </Switch>
    );
};

export default BrowserPage;
