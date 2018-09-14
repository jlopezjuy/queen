package ar.com.anelsoftware.app.service.mapper;

import ar.com.anelsoftware.app.domain.*;
import ar.com.anelsoftware.app.service.dto.ProductoDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Producto and its DTO ProductoDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ProductoMapper extends EntityMapper<ProductoDTO, Producto> {


    @Mapping(target = "marcas", ignore = true)
    @Mapping(target = "categorias", ignore = true)
    Producto toEntity(ProductoDTO productoDTO);

    default Producto fromId(Long id) {
        if (id == null) {
            return null;
        }
        Producto producto = new Producto();
        producto.setId(id);
        return producto;
    }
}
