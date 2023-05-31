import React from 'react'

function Pagination({ page, setPage }) {
    return (
        <div className='text-center'>


            <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                disabled={page == 0}
                onClick={() => {
                    setPage(page - 1)
                }}>
                Previous
            </button>


            <button class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => {
                    setPage(page + 1)
                }}>
                Next
            </button>

        </div>
    )
}

export default Pagination