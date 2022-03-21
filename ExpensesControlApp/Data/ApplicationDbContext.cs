﻿using ExpensesControlApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ExpensesControlApp.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)        
        {

        }
        public DbSet<Expense> Expenses { get; set; }
        public DbSet<RegularExpense> RegularExpenses { get; set; }
        public DbSet<ExpenseEntry> ExpenseEntries { get; set; }
        public DbSet<Param> Params { get; set; }
    }
}
