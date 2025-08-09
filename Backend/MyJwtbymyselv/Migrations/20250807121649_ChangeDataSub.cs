using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyJwtbymyselv.Migrations
{
    /// <inheritdoc />
    public partial class ChangeDataSub : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Price",
                table: "userSubPlan",
                type: "int",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.UpdateData(
                table: "userSubPlan",
                keyColumn: "Id",
                keyValue: 1,
                column: "Price",
                value: 25);

            migrationBuilder.UpdateData(
                table: "userSubPlan",
                keyColumn: "Id",
                keyValue: 2,
                column: "Price",
                value: 55);

            migrationBuilder.UpdateData(
                table: "userSubPlan",
                keyColumn: "Id",
                keyValue: 3,
                column: "Price",
                value: 75);

            migrationBuilder.UpdateData(
                table: "userSubPlan",
                keyColumn: "Id",
                keyValue: 4,
                column: "Price",
                value: 105);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Price",
                table: "userSubPlan",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "userSubPlan",
                keyColumn: "Id",
                keyValue: 1,
                column: "Price",
                value: 25m);

            migrationBuilder.UpdateData(
                table: "userSubPlan",
                keyColumn: "Id",
                keyValue: 2,
                column: "Price",
                value: 55m);

            migrationBuilder.UpdateData(
                table: "userSubPlan",
                keyColumn: "Id",
                keyValue: 3,
                column: "Price",
                value: 75m);

            migrationBuilder.UpdateData(
                table: "userSubPlan",
                keyColumn: "Id",
                keyValue: 4,
                column: "Price",
                value: 105m);
        }
    }
}
