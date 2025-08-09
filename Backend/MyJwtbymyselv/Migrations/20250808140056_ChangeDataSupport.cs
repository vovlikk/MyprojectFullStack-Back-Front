using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyJwtbymyselv.Migrations
{
    /// <inheritdoc />
    public partial class ChangeDataSupport : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Support",
                newName: "UserName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Support",
                newName: "UserId");
        }
    }
}
