import { Grid } from '@mui/material'
import React from 'react'
import { IngredientsTable } from './IngredientsTable'
import { IngredientsCategoryTable } from './IngredientsCategoryTable'

export const Ingredients = () => {
  return (
    <div>
      <Grid container spacing={2} className='px-2'>
        <Grid item xs={12} lg={8}>
          <IngredientsTable/>
        </Grid>
        <Grid item xs={12} lg={4}>
          <IngredientsCategoryTable/>
        </Grid>
      </Grid>
    </div>
  )
}
