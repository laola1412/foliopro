import supabase from '@/lib/supabaseClient'
import { Suspense } from 'react'

export default async function Investment({ params }) {
    const { data: companyData } = await supabase
        .from('FolioEntry')
        .select('*')
        .eq('id', params.investment)

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="p-12">
                    <p>{companyData[0].ticker}</p>
                    <p>{companyData[0].analysis}</p>
                    <h2>Highlights</h2>
                    <p>
                        What significant events happened recently? Margin improvements, new
                        directors, products ... .{' '}
                    </p>
                    <h2>Basic Information</h2>
                    <p>Market cap, 52week range, qoq and yoy changes</p>
                    <h2>Company Overview/Operations</h2>
                    <h2>Industry Overview</h2>
                    <h2>Investment Thesis</h2>
                    <h2>Catalysts</h2>
                    <h2>Risks</h2>
                    <h2>Valuation</h2>
                    <h2>Conclusion</h2>
                </div>
            </Suspense>
        </>
    )
}
