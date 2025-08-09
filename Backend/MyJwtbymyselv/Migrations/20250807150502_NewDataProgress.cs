using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyJwtbymyselv.Migrations
{
    /// <inheritdoc />
    public partial class NewDataProgress : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "userWorkouts");

            migrationBuilder.AddColumn<int>(
                name: "Month",
                table: "userWorkouts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Workout",
                table: "userWorkouts",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Month",
                table: "userWorkouts");

            migrationBuilder.DropColumn(
                name: "Workout",
                table: "userWorkouts");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "userWorkouts",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
