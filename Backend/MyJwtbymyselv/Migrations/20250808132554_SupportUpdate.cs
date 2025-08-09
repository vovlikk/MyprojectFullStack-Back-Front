﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyJwtbymyselv.Migrations
{
    /// <inheritdoc />
    public partial class SupportUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Support");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Support",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
