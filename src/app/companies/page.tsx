import React from 'react';
import Header from '../components/header';
import Toolbar from '../components/toolbar';
import SearchInput from '../components/search-input';
import AddCompanyButton from '../components/add-company-button';
import CompanyTable from '../components/company-table';
import CompanyRow from '../components/company-row';

export interface  PageProps {
    
}

export default function Page({ }: PageProps) {
    return <>
        <Header>Companies</Header>
        <Toolbar action={<AddCompanyButton/>}>
            <SearchInput/>
        </Toolbar>
        {/* <CompanyTable>
            <CompanyRow
                id={1}
                category={'Products'}
                company={'Costco'}
                status={Status.Pending}
                promotion={true}
                country={'USA'}
                oinedDate={'02.19.2023'} />
        </CompanyTable> */}
        </>
    
}