# Vue3 assignment

## Task:

1. Make an api call using `axios`
1. Write logic to convert `data` key into tree as every object has `parent_group_id` value has `id` of same data group, if it is null, make that group as root object of tree.
1. Visualize this tree starting from root objects of tree and then their childs

## Note:

1. Use Vue.js 3 using typescript
1. Clone repo from https://github.com/divamtech/vue-assignement
1. Create a branch with your name
1. Commit small commits, so we can see the commit history. Please avoid one big commit for the entire submission. We would like to see how you approached and went about completing the submission and not just the final result.

### API call:

```
curl --location --request GET 'https://api.webledger.in/api/groups' \
--header 'x-business-id: 1' \
--header 'Authorization: Bearer MjU.u0p9qLLo8tvjGD6L3NDH5-sub8vKyz7GtcaPcymDJ7BCrLfNuf6JQJs11Qkn'
```

### Response:

```
{
    "meta": {
        "total": 1,
        "per_page": 31,
        "current_page": 1,
        "last_page": 1,
        "first_page": 1
    },
    "data": [
        {
            "id": 1,
            "parent_group_id": null,
            "name": "Branch / Divisions (G)",
            "alias": "BRANCH_DIVISIONS",
            "category": "ASSET",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 2,
            "parent_group_id": null,
            "name": "Capital Account (G)",
            "alias": "CAPITAL_ACCOUNT",
            "category": "LIABILITY_AND_CAPITAL",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 3,
            "parent_group_id": 2,
            "name": "Reserves & Surplus (G)",
            "alias": "RESERVES_SURPLUS",
            "category": "LIABILITY_AND_CAPITAL",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Capital Account (G)"
        },
        {
            "id": 4,
            "parent_group_id": null,
            "name": "Current Assets (G)",
            "alias": "CURRENT_ASSETS",
            "category": "ASSET",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 5,
            "parent_group_id": 4,
            "name": "Bank Accounts (G)",
            "alias": "BANK_ACCOUNTS",
            "category": "ASSET",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Current Assets (G)"
        },
        {
            "id": 6,
            "parent_group_id": 4,
            "name": "Cash-in-Hand (G)",
            "alias": "CASH_IN_HAND",
            "category": "ASSET",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Current Assets (G)"
        },
        {
            "id": 7,
            "parent_group_id": 4,
            "name": "Deposits (Asset) (G)",
            "alias": "DEPOSITS_ASSET",
            "category": "ASSET",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Current Assets (G)"
        },
        {
            "id": 8,
            "parent_group_id": 4,
            "name": "Loans & Advances (Asset) (G)",
            "alias": "LOANS_ADVANCES_ASSET",
            "category": "ASSET",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Current Assets (G)"
        },
        {
            "id": 9,
            "parent_group_id": 4,
            "name": "Stock-in-Hand (G)",
            "alias": "STOCK_IN_HAND",
            "category": "ASSET",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Current Assets (G)"
        },
        {
            "id": 10,
            "parent_group_id": 4,
            "name": "Sundry Debtors (G)",
            "alias": "SUNDRY_DEBTORS",
            "category": "ASSET",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Current Assets (G)"
        },
        {
            "id": 11,
            "parent_group_id": null,
            "name": "Current Liabilities (G)",
            "alias": "CURRENT_LIABILITIES",
            "category": "LIABILITY_AND_CAPITAL",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 12,
            "parent_group_id": 11,
            "name": "Duties & Taxes (G)",
            "alias": "DUTIES_TAXES",
            "category": "LIABILITY_AND_CAPITAL",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Current Liabilities (G)"
        },
        {
            "id": 13,
            "parent_group_id": 11,
            "name": "Provisions (G)",
            "alias": "PROVISIONS",
            "category": "LIABILITY_AND_CAPITAL",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Current Liabilities (G)"
        },
        {
            "id": 14,
            "parent_group_id": 11,
            "name": "Sundry Creditors (G)",
            "alias": "SUNDRY_CREDITORS",
            "category": "LIABILITY_AND_CAPITAL",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Current Liabilities (G)"
        },
        {
            "id": 15,
            "parent_group_id": null,
            "name": "Direct Expenses (G)",
            "alias": "DIRECT_EXPENSES",
            "category": "EXPENSE",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 16,
            "parent_group_id": null,
            "name": "Direct Incomes (G)",
            "alias": "DIRECT_INCOMES",
            "category": "INCOME",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 17,
            "parent_group_id": null,
            "name": "Fixed Assets (G)",
            "alias": "FIXED_ASSETS",
            "category": "ASSET",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 18,
            "parent_group_id": null,
            "name": "Indirect Expenses (G)",
            "alias": "INDIRECT_EXPENSES",
            "category": "EXPENSE",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 19,
            "parent_group_id": null,
            "name": "Indirect Incomes (G)",
            "alias": "INDIRECT_INCOMES",
            "category": "INCOME",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 20,
            "parent_group_id": null,
            "name": "Investments (G)",
            "alias": "INVESTMENTS",
            "category": "ASSET",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 21,
            "parent_group_id": null,
            "name": "Loans (Liability) (G)",
            "alias": "LOANS_LIABILITY",
            "category": "LIABILITY_AND_CAPITAL",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 22,
            "parent_group_id": 21,
            "name": "Bank OD A/c (G)",
            "alias": "BANK_OD_A_C",
            "category": "LIABILITY_AND_CAPITAL",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Loans (Liability) (G)"
        },
        {
            "id": 23,
            "parent_group_id": 21,
            "name": "Secured Loans (G)",
            "alias": "SECURED_LOANS",
            "category": "LIABILITY_AND_CAPITAL",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Loans (Liability) (G)"
        },
        {
            "id": 24,
            "parent_group_id": 21,
            "name": "Unsecured Loans (G)",
            "alias": "UNSECURED_LOANS",
            "category": "LIABILITY_AND_CAPITAL",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Loans (Liability) (G)"
        },
        {
            "id": 25,
            "parent_group_id": null,
            "name": "Misc. Expenses (ASSET) (G)",
            "alias": "MISC_EXPENSES_ASSET",
            "category": "ASSET",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 26,
            "parent_group_id": null,
            "name": "Profit & Loss A/C (G)",
            "alias": "PROFIT_LOSS_A_C",
            "category": "LIABILITY_AND_CAPITAL",
            "editable": false,
            "restricted": true,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 27,
            "parent_group_id": null,
            "name": "Purchase Accounts (G)",
            "alias": "PURCHASE_ACCOUNTS",
            "category": "EXPENSE",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 28,
            "parent_group_id": null,
            "name": "Sales Accounts (G)",
            "alias": "SALES_ACCOUNTS",
            "category": "INCOME",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 29,
            "parent_group_id": null,
            "name": "Suspense A/c (G)",
            "alias": "SUSPENSE_A_C",
            "category": "ASSET",
            "editable": false,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "PRIMARY"
        },
        {
            "id": 59,
            "parent_group_id": 4,
            "name": "DEPOSITE (G)",
            "alias": null,
            "category": "ASSET",
            "editable": true,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Current Assets (G)"
        },
        {
            "id": 60,
            "parent_group_id": 16,
            "name": "Income (G)",
            "alias": null,
            "category": "INCOME",
            "editable": true,
            "restricted": false,
            "balance": 0,
            "sub_groups": [],
            "parent_name": "Direct Incomes (G)"
        }
    ]
}
```

## Addional Points on assignments if:

Create a switch button on top right with three options:

1. Table view (where raw data as coming should as tabularize with parent name as second column, and category will be the third column)
1. Tree view with Root Object as the above instructions does
1. Tree view with Category as root objects and then further tree will be formed.

**Use vuex for three view switching, instead of API calling everytime.**
