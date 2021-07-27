using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeRegisterAPI.Migrations
{
    public partial class Initial1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductTitle = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    ProductDescription = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    MaximumThickness = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    MinimumThickness = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    MaximumWidth = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    MinimumWidth = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    MaximumLength = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    MinimumLength = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    ImageName = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
